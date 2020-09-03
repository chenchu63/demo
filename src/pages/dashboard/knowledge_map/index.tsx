
import React,{Component} from "react";
import {Input,Radio} from 'antd';
import G6 from '@antv/g6/build/g6';
import '@antv/g6/build/plugin.util.extractSubgraph';    //关键包->G6.Util.extract('bi', [item]);
import '@antv/g6/build/plugin.tool.highlightSubgraph';  //高亮
import '@antv/g6/build/plugin.tool.fisheye';            //鱼眼放大
import '@antv/g6/build/plugin.tool.textDisplay';        //文字显示与隐藏
import '@antv/g6/build/plugin.layout.forceAtlas2';      //全部布局dagre、circle、grid、forceAtlas2、archimeddeanSpiral
import '@antv/g6/build/plugin.behaviour.analysis';      //拖动画布

const zoomArray=[0.2,0.5,0.6,0.7, 1, 1.5,2,4];
const Highlighter = G6.Plugins['tool.highlightSubgraph'];
const highlighter = new Highlighter();
const FishEyePlugin = G6.Plugins['tool.fisheye'];
const FishEye = new FishEyePlugin({radius: 100, d:1});

//import data from './test5000';

/**
 *@author Chu Chen
 *@date   2020-09-03
 */
export default class knowledgeMap extends Component {

    componentDidMount(){
		let widthX = document.getElementById('knowledge_map').scrollWidth;
		let heightX = document.getElementById('knowledge_map').scrollHeight || 500;

		const graph = new G6.Graph({
		  container: 'knowledge_map',
		  width: widthX,
		  height: heightX,
		  fitView: 'autoZoom',
		  defaultNode: {
			size: 2,
			style: {
			  fill: '#C6E5FF',
			  stroke: '#5B8FF9',
			  lineWidth: 0.3,
			},
			labelCfg: {
			  style: {
				fontSize: 3,
			  },
			  position: 'right',
			  offset: 1,
			},
		  },
		  defaultEdge: {
			size: 0.1,
			color: '#333',
		  },
		  nodeStateStyles: {
			selected: {
			  fill: 'steelblue',
			  stroke: '#000',
			  lineWidth: 1,
			},
		  },
		  plugins: [highlighter, FishEye],
		  modes: {default: [
		  'panCanvas']}
		});
		
		this.graph=graph;
		
        fetch('https://gw.alipayobjects.com/os/basement_prod/da5a1b47-37d6-44d7-8d10-f3e046dabf82.json')
		  .then((res) => res.json())
		  .then((data) => {
			data.nodes.forEach((node) => {
			  node.label = node.olabel;
			  node.degree = 0;
			  data.edges.forEach((edge) => {
				if (edge.source === node.id || edge.target === node.id) {
				  node.degree++;
				}
			  });
			});
			this.mapNodeSize(data.nodes, 'degree', [1, 10]);
			graph.read(data);
		  });
    }
	
	mapNodeSize=(nodes, propertyName, visualRange) => {
	  let minp = 9999999999;
	  let maxp = -9999999999;
	  nodes.forEach((node) => {
		node[propertyName] = Math.pow(node[propertyName], 1 / 3);
		minp = node[propertyName] < minp ? node[propertyName] : minp;
		maxp = node[propertyName] > maxp ? node[propertyName] : maxp;
	  });
	  const rangepLength = maxp - minp;
	  const rangevLength = visualRange[1] - visualRange[0];
	  nodes.forEach((node) => {
		node.size = ((node[propertyName] - minp) / rangepLength) * rangevLength + visualRange[0];
	  });
	};
	
    render(){
        return (
		<div id="out_box" style={{width:'1400px', height:'820px'}}>
			<Radio.Group>
				{zoomArray.map(ratio => <Radio.Button key={ratio} value={ratio} onClick={() => this.graph.zoom(ratio)}>{`${ratio * 100}%`}</Radio.Button>)}
			</Radio.Group>
			<div id="knowledge_map" style={{width:'1400px', height:'800px'}}></div>
		</div>
        )
    }
}