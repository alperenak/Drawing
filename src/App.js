import React from 'react';
import './App.css';

export default class Drawer extends React.Component{
constructor(props){
super(props)
this.state={
  isDraw:null,
value:this.slider
}
this.oldX=null
this.oldY=null
this.draw=this.draw.bind(this)


}

componentDidMount(){
this.slider=document.getElementById("myRange")
this.canvas=document.getElementById("canvas");
this.context=this.canvas.getContext("2d")
this.loop()
console.log(this.value)

}

update(){
 
  document.addEventListener("mousedown",()=>{
    this.isDraw=true
    this.oldX=0
    this.oldY=0
    document.addEventListener("mousemove",(evt)=>{
      if(this.isDraw===true){
        const rect = this.canvas.getBoundingClientRect();
        this.PosX= evt.clientX - rect.left
        this.PosY= evt.clientY - rect.top
        if(this.PosX>0&&this.PosX<798&&this.PosY>0&&this.PosY<498){

          this.draw();


        }

      }
      document.addEventListener("mouseup",()=>{
    this.isDraw=false

    this.oldX=0
    this.oldY=0
      }) 
       this.canvas.addEventListener("mouseout",()=>{

        this.oldX=0
    this.oldY=0
      })




  })




  })






}

draw(e){
  console.log(this.color)

this.context.lineCap="round"
 this.context.beginPath();
 if(this.oldX>0&&this.oldY>0){

  this.context.moveTo(this.oldX, this.oldY);


 }
 this.context.strokeStyle=this.color?this.color:"black"
this.context.lineWidth = e;
this.context.lineTo(this.PosX, this.PosY);
this.context.stroke();
this.context.closePath();
this.oldX=this.PosX
this.oldY=this.PosY
// this.color="white"?this.color="black":this.color="white"

}
loop(){
this.update();


}


render(){
  return(

<div>

  <div>
<canvas id="canvas" height="500" width="800"  style={{border:"1px solid black",backgroundColor:"white",margin:200,marginBottom:50}}>


</canvas>
<div style={{flexDirection:"row",display:"flex"}}> 
<div>
<button onClick={()=>{this.color ="white"
 

}} style={{marginLeft:300,width:150,height:35}}>Eraser</button>    <button onClick={()=>{this.color ="black"
 

}} style={{marginLeft:300,width:150,height:35}}>Drawer</button>    

</div>

    </div>
    <div>
    <span style={{marginLeft:520,fontSize:25}}>
      Line Width
    </span>
    <div style={{marginLeft:510,marginTop:10}}>
    
  <input type="input"  min="1" max="50"  onChange={(e)=>{this.draw(e.target.value)}}   id="myRange"/>
</div>


    </div>


</div>


</div>
  
  )
}
















}







