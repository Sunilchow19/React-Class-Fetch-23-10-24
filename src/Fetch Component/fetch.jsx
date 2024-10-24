import { Component } from "react";
import "./fetch.css"

class Fetch extends Component{
    constructor(){
        super()
        this.state={
            a:0,
            api:[]
        }
    }

    componentDidMount(){
        return (
            fetch("https://fakestoreapi.com/products").then((res)=>{
                return res.json()
            }).then((res)=>{
                this.setState({
                    api:res
                })
                console.log(res)
            })
        )
    }


    render(){


   

        let resu=this.state.api.map((val,ind)=>{
            return (
                <>
                <table >
                    <tr >
                        <td>{val["id"]}</td>
                        <td>{val["title"]}</td>
                        <td>{val["price"]}</td>
                        <td>{val["category"]}</td>
                        <td>{val["description"]}</td>
                        <td><img src={val["image"]} alt="" width={200} /></td>
                        <td>{val["rating"]["rate"]}</td>
                        <td>{val["rating"]["count"]}</td>

                    </tr>
                </table>
                
                </>
            )
        })

        return(
            <>
            <h1>{resu}</h1>
            </>
        )
    }

}


export default Fetch

