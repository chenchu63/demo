
import React,{Component} from "react";
import {Input,Radio,Switch,message } from 'antd';
import SearchInput from '@/components/SearchInput/index';
import G6 from '@antv/g6/build/g6';
import '@antv/g6/build/plugin.util.extractSubgraph';    //关键包->G6.Util.extract('bi', [item]);
import '@antv/g6/build/plugin.tool.highlightSubgraph';  //高亮
import '@antv/g6/build/plugin.tool.fisheye';            //鱼眼放大
import '@antv/g6/build/plugin.tool.textDisplay';        //文字显示与隐藏
import '@antv/g6/build/plugin.layout.forceAtlas2';      //全部布局dagre、circle、grid、forceAtlas2、archimeddeanSpiral
import '@antv/g6/build/plugin.behaviour.analysis';      //拖动画布
import data from './test3';

const zoomArray=[0.2,0.5,0.6,0.7, 1, 1.5,2,4];
const Highlighter = G6.Plugins['tool.highlightSubgraph'];
const highlighter = new Highlighter();
const FishEyePlugin = G6.Plugins['tool.fisheye'];
const FishEye = new FishEyePlugin({radius: 100, d:1});
// const textDisplay = new G6.Plugins['tool.textDisplay']();
// const CircleLayout=new G6.Plugins['layout.forceAtlas2']({maxIteration: 1000, kg: 2, kr: 40, prevOverlapping: true});
let showEdgesCache; //鼠标选中边缓存
let showNodesCache; //鼠标选中节点缓存
let timeOutIsOver=true;
// let dataCache;      //数据缓存
/**
 *cdr、cda、服务->数据集 关系图
 *@author WangXLong
 *@date   2018-12-17
 */
export default class LinkData extends Component{
    state={
        browserWidth:800,
        browserHeight:600,
        dataCache:[]
    };
    // 鼠标移入节点显示 label
    tryHideLabel = node => {
        const model = node.getModel();
        const label = node.getLabel();
        const labelBox = label.getBBox();
        if (labelBox.maxX - labelBox.minX >= model.size) {
            label.hide();
        }else {
            label.show();
        }
    };
    //自定义布局 data->JSON数据 layout->0规整布局/1随机布局
    customLayout=(data,layout)=>{

        let R =80 ;                                         //圆半径
        let MAX = 200;                                      //该半径周长分布的块
        let tableNum=0;
        let cdaNum=0;
        let serviceNum=0;
        let collectionNum=0;
        const customNodes=[];
        const {nodes=[],edges=[]}=data;

        nodes.map((item,index)=>{
            let node=item;
            switch (item.type){
                case 'service':
                    let surround=10;
                    if(serviceNum<=10){
                        surround=0;
                        MAX=10;
                    }else if(serviceNum<=25){
                        surround=1;
                        MAX=15;
                    }else if (serviceNum<=45){
                        surround=2;
                        MAX=20;
                    }else{
                        surround=3.2;
                        MAX=35;
                    }
                    R=layout===1?Math.floor(surround*10+15*Math.random()+15):(surround*10+15);
                    node.size=Math.floor((Math.random()*20)+25);
                    serviceNum++;
                    break;
                case 'cda':
                    R=layout===1?Math.floor((Math.random()*30)+70):(cdaNum%2===0? 60:70);        //根据数据类型确定随机半径
                    MAX=53;
                    node.size=Math.floor((Math.random()*20)+30); //块的面积大小
                    cdaNum++;
                    break;
                case 'collection':
                    R=layout===1?Math.floor((Math.random()*30)+100):(collectionNum%2===0? 80:90);        //根据数据类型确定随机半径
                    MAX=59;
                    node.size=Math.floor((Math.random()*20)+30); //块的面积大小
                    collectionNum++;
                    break;
                case 'table':
                    R=layout===1?Math.round(Math.random()*30+140):(tableNum%2===0? 100:110);
                    MAX=layout===1?70:65;
                    node.size=Math.floor((Math.random()*10)+30);
                    tableNum++;
                    break;
                default:
                    R=80;
                    MAX=60;
                    node.size=Math.floor((Math.random()*10)+20);
            }
            node.x=Math.cos(index * 2 * Math.PI / MAX) * R*5;   //块x坐标
            node.y=Math.sin(index * 2 * Math.PI / MAX) * R*5;   //块y坐标
            customNodes.push(node);
        });
        data.nodes=customNodes;
        data.edges=edges;
        this.setState({dataCache:data});
        return data;
    };

    componentWillMount(){
        this.setState({
            browserWidth:document.body.clientWidth,
            browserHeight:document.body.clientHeight
        })
    }

    componentDidMount(){
        this.graphInit(data,0);
    }

    //图形初始化
    graphInit=(data,layout)=>{
        const dataSource=this.customLayout(data,layout);
        const graph = new G6.Graph({
            container: 'mountNode',
            fitView: 'autoZoom',
            width: this.state.browserWidth-300,
            height: this.state.browserHeight-100, // 画布高
            plugins: [highlighter, FishEye,],
            modes: {default: ['panCanvas']}
        });
        this.graph=graph;
        graph.read(dataSource);
        // 隐藏所有边
        graph.getEdges().forEach(function(edge) {
            graph.hide(edge);
        });
        graph.getNodes().forEach(node => {
            node.getLabel().hide();
        });

        graph.on('node:mouseenter', ({item})=>{
            this.mouseEnter(item)
        });
        graph.on('node:mouseleave', ()=> {                      //鼠标离开之后隐藏边、节点标题
            this.mouseLeave()
        });
    };

    //鼠标选中事件
    mouseEnter=(item)=>{
        const {reNodes, reEdges} =G6.Util.extract('bi', [item]); //获取选中节点及和其有关系的节点、边的集合
        console.log(reNodes);
        showEdgesCache=reEdges;
        showNodesCache=reNodes;
        this.graph.highlightSubgraph(reNodes.concat(reEdges));   //高亮显示
        this.graph.preventAnimate(()=>{
            reEdges.forEach(edge=>{this.graph.show(edge);})      //显示边
        });
        reNodes.forEach(node=>{                                  //显示节点名称
            node.getLabel().show();
            if(typeof node.model.label==='string'){
               this. graph.update(node.id,{size:node.model.size*2,label:{text:node.model.label,fontSize:20,fontWeight:'bold'}});
            }else{
                this.graph.update(node.id,{size:node.model.size*2});
            }
        });
    };

    //鼠标离开事件
    mouseLeave=()=>{
        this.graph.unhighlightGraph();
        showEdgesCache.forEach((edge)=> {
            this.graph.hide(edge);
        });
        showNodesCache.forEach(node=>{
            this.graph.update(node.id,{size:node.model.size/2,});
            node.getLabel().hide();
        });
        this.graph.updateNodePosition();
    };

    //布局切换开关
    switchOnChange=(checked)=>{
        const layout=checked===false? 0:{type:'force'};
        const dataSource=this.customLayout(data,layout);
        this.graph.read(dataSource);
        this.graph.getEdges().forEach((edge)=> {
            this.graph.hide(edge);
        });
        this.graph.getNodes().forEach(node => {
            node.getLabel().hide();
        });
    };

    //查找
    inputSearch=(value)=>{
        if(timeOutIsOver){
            if(value){
                value=value.split('(')[0];
                const { nodes=[]}=this.state.dataCache;
                try {
                    nodes.forEach(node=>{
                        if(node.label===value||node.label.text===value){
                            value=node.id;
                        }
                    });
                }catch (e){
                    console.error(e);
                }
                const node=this.graph.find(value);
                if(node){
                    timeOutIsOver=false;
                    this.mouseEnter(node);
                    setTimeout(()=>{
                        this.mouseLeave();
                        timeOutIsOver=true;
                    },3000);
                }else{
                    message.error(`${value}节点不存在！`);
                }
            }else{
                message.warn("请输入所要查找的节点名称！")
            }
        }else{
            message.warn("同一时间只能高亮放大显示一组！")
        }
    };
    render(){
        return (
            <div  style={{textAlign:'center',fontSize:20,padding:20}}>
                <Radio.Group>
                    {zoomArray.map(ratio => <Radio.Button key={ratio} value={ratio} onClick={() => this.graph.zoom(ratio)}>{`${ratio * 100}%`}</Radio.Button>)}
                </Radio.Group>
                <div style={{float:'right',marginTop:80}}>
                    {<Input.Search
                        placeholder="请输入节点名称"
                        onSearch={value => this.inputSearch(value)}
                        style={{ width: 200 }}
                    />}
                    <Switch style={{marginBottom:10}} checkedChildren="随机布局" unCheckedChildren="规整布局"  onChange={this.switchOnChange}/>
                    <div style={{textAlign:'left',background:'#c8a788',padding:'2px 30px 2px 10px',fontWeight:'bold'}}>
                        交互服务(81)
                    </div>
                    <div style={{textAlign:'left',background:'#1890ff',padding:'2px 30px 2px 10px',fontWeight:'bold'}}>
                        CDA(53)
                    </div>
                    <div style={{textAlign:'left',background:'#28c9cc',padding:'2px 30px 2px 10px',fontWeight:'bold'}}>
                        数据子集(58)
                    </div>
                    <div style={{textAlign:'left',background:'#36bc8d',padding:'2px 30px 2px 10px',fontWeight:'bold'}}>
                        CDR表(130)
                    </div>
                    <SearchInput key={"SearchInput"}  FatherInput={this.inputSearch} data={this.state.dataCache} placeholder="内容搜索" style={{ width: 200,marginTop:10 }}/>
                </div>
                <div id="mountNode" style={{width:'calc(90% - 300px)',}}/>
            </div>
        )
    }
}