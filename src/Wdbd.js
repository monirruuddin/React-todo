import React from "react"

const addStyle={
    textAlign: "center",
    marginTop:"100px",
}

class Wdbd extends React.Component{
    constructor(props){
        super(props)
        
        this.state ={
            count:10,
            EvenOROddCheck:"ok",

           }

    }
   
  incrementfunc = ()=>{
       this.setState({
        count: this.state.count+ 1,
        
       })
       
    }
    decrementfunc = ()=>{
        this.setState({
         count: this.state.count - 1,
         
        })
    }

    findTheEvenOdd =()=>{
        
        if(this.state.count % 2 === 0){
            const ss = "text";
            this.setState({
                EvenOROddCheck: this.state.EvenOROddCheck+ ss
               })
            
        }else{
            this.setState({
                EvenOROddCheck: "Odd Number"
               })
        }
    }
    render(){
        return(
            <div className="mainCountBOx" style={addStyle}>
                <p>Count {this.state.count}</p>
                <button onClick={this.incrementfunc}>Increment</button>
                <button onClick={this.decrementfunc}>Decrement</button>
                <IsoddOrEven EvenOrOdd ={this.state.EvenOROddCheck} count={this.state.count}/>
            </div>
        )
    }
    }
class IsoddOrEven extends React.Component{
   render(){
       return(
           <div className="mainCountBOx">
               <p>{this.props.count} is {this.props.EvenOrOdd}</p>
           </div>
       )
   }
}
export default Wdbd
