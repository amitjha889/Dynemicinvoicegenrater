import { TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PhotoIcon from '@mui/icons-material/Photo';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useEffect, useState } from "react";
import {IconButton} from "@mui/material";

import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Billing(){

const [val,setVal]=useState([{Name:"",Qty:"",Rate:"",Discription:"",Amount:"",file:""}])
const [grand,setGrand]=useState(1)
const [gt,setGt]=useState({})
const [jaso,setJeso]=useState(false)
const[show,setShow]=useState(false)


// total ammount function ............................

function calculategrandtotal(){
     
    var t=0

    val.map((val,index)=>{
     
        t=t+val.Amount
       
        setGrand(t)


    })


}

useEffect(()=>{

    calculategrandtotal()

},[val])



// add new componant function .................

const Addnew=()=>{
    
    const abc=[...val,{Name:'',Qty:'',Rate:'',Discription:'',Amount:'',file:''}]
   
    setVal(abc)

}

// delete componant function .....................

const deletecompo=(index)=>{

const delet=[...val]
delet.splice(index,1)   
setVal(delet)


}

// handledata function ...................

const handledata=(event,index)=>{
    
    
    let newform=[...val]

    newform[index][event.target.name]=event.target.value
   
    setVal(newform)
    
        

} 


// showdiscription box function .........................

const disopen=()=>{
    setShow(true)

}



// submit and show total....................

const submit=()=>{
    
    var ak={"Grand Total":grand}

    setGt(ak)
    setJeso(true)




}

// push data in json ..........................

let table={

   total:grand,
   data:[]


}

table.data.push(...val)





function Addcompo(){

    return  val.map((data,index)=>{

        return (
       

            <div style={{border:'1px solid black'}}  >

                <div style={{width:'80vw',height:'auto',background:'#e1ebfc',display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',paddingTop:20,paddingBottom:20}}>
                        <TextField style={{fontFamily:'Montserrat'}}  name={'Name'}  defaultValue={data.Name} onChange={(event)=>handledata(event,index)} id="standard-basic" label="Item Name" variant="standard"  />
                        <TextField  name={'Qty'} style={{fontFamily:'Montserrat'}}   defaultValue={data.Qty}  onChange={(event)=>handledata(event,index)}  id="standard-basic" label="Quantity" variant="standard"/>
                        <TextField  name={'Rate'}  defaultValue={data.Rate}  style={{fontFamily:'Montserrat'}}  onChange={(event)=>handledata(event,index)}  id="standard-basic" label="Rate" variant="standard"  />
                        <TextField style={{fontFamily:'Montserrat'}} name={'Amount'} value={data.Amount=data.Qty*data.Rate} onChange={(event)=>handledata(event,index)}  id="standard-basic" label="Amount" variant="outlined"  />
                        <div  onClick={()=>deletecompo(index)} >
                        <CloseIcon />
                        </div>
                        
                    </div>
                <div style={{width:'80vw',height:'auto',background:'#e1ebfc',display:'flex',flexDirection:'row',paddingTop:20,paddingBottom:20}}>
                
                    <div style={{width:'15vw',display:'flex',alignItems:'center',justifyContent:'center',color:'#8e44ad',paddingLeft:20,cursor:'pointer'}}  onClick={()=>disopen()}  >
                       <div style={{marginRight:8}} >
                          <AddBoxIcon/>
                       </div>
                        Add Description
                    </div>
                    
                    {show?<div  style={{flexDirection:'row',height:'auto',display:'flex',width:'auto'}}>
                    <div style={{width:'16vw',display:'flex',alignItems:'center',justifyContent:'center',color:'#5019d1'}}  >
                        <input type="text" style={{width:500,height:100,paddingLeft:20,boxShadow:'#8e44ad 1px 1px 5px 5px',border:'1px solid black'}} placeholder="Discription"  name={'Discription'}  value={data.Discription}  onChange={(event)=>handledata(event,index)}  />
                    </div></div>:<></>}
               


                    <div style={{width:'16vw',display:'flex',alignItems:'center',justifyContent:'center',color:'#8e44ad',paddingLeft:20}}   >
                        <div style={{marginRight:10}} >
                        <IconButton  color="primary"  style={{color:'#8e44ad'}} aria-label="upload picture"  component="label"  >
                           
                           <input type="file"  hidden  name={'file'}  defaultValue={data.file}  onChange={(event)=>handledata(event,index)}  />
                         <PhotoIcon/>
                        </IconButton>
                        
                        </div>
                        Add Thumbnail
                    </div>

                   
                   

                </div>

               
                
            </div>

        )  

    })

}






return(

<div style={{width:'100vw',height:'auto',display:'flex',flexDirection:'column',alignItems:'center',fontFamily:'Montserrat'}}>
    <div style={{width:'80vw',height:60,background:'#8e44ad',marginTop:50,display:'flex',flexDirection:'row'}}>
        <div style={{display:'flex',width:'17vw',alignItems:'center',fontWeight:'bold',fontSize:14,color:'#fff',justifyContent:'center',marginRigh:18}}>Item Name</div>
        <div style={{display:'flex',alignItems:'center',fontWeight:'bold',color:'#fff',fontSize:14,width:'17vw',justifyContent:'center',marginRigh:18}}>Quantity</div>
        <div style={{display:'flex',justifyContent:'center',width:'17vw',fontWeight:'bold',alignItems:'center',fontSize:14,color:'#fff',marginRigh:18}}>Rate</div>
        <div style={{display:'flex',justifyContent:'center',width:'17vw',marginRigh:18,fontWeight:'bold',alignItems:'center',fontSize:14,color:'#fff'}}>Amount</div>
    </div>
   
    {Addcompo()}

    <div style={{fontWeight:'bold',width:'80vw',height:40,background:'#e1ebfc',display:'flex',color:'#8e44ad',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20,marginBottom:20,border:'1px dashed grey',fontFamily:'Montserrat'}} onClick={()=>{Addnew()}} >
        <div style={{marginRight:10}} >
        <AddBoxIcon/>
        </div>
        Add New Line 
    </div>






<div style={{width:'81vw',height:50,background:'#fff',display:'flex',flexDirection:'row',marginTop:20}}>
<div style={{width:'54vw'}}></div>
<div style={{width:'26vw',display:'flex',alignItems:'center',justifyContent:'center',color:'#8e44ad'}}>
<LocalOfferIcon  style={{marginRight:5}}/>Add Discount/Additional Charges
</div>
</div>

<div style={{width:'81vw',height:50,background:'#fff',display:'flex',flexDirection:'row'}}>
    <div style={{width:'51vw'}}></div>
    <div style={{display:'flex',alignItems:'center',width:'25vw',justifyContent:'center',color:'#000',fontSize:20,fontWeight:'bold',padding:5,fontFamily:'Montserrat'}}>
        <div>Total (INR) :   {grand} </div>
        <div style={{marginLeft:20}}>&#8377;</div>
    </div>
</div>

<div style={{width:'81vw',height:50,background:'#fff',display:'flex',flexDirection:'row'}}>
<div style={{width:'49vw'}}></div>
<div style={{width:'31vw',display:'flex',alignItems:'center',justifyContent:'center',color:'#8e44ad'}}>
<MonetizationOnIcon style={{marginRight:5}} />Show Total In Words
</div>
</div>
<div style={{width:'81vw',height:50,background:'#fff',display:'flex',flexDirection:'row'}}>
<div style={{width:'47vw'}}></div>
<div style={{width:'33vw',display:'flex',alignItems:'center',justifyContent:'center',color:'#8e44ad'}} >
  <AddCircleIcon style={{marginRight:5}}   />   Add More Fields
</div>


</div>

    <div  style={{cursor:'pointer',width:'81vw',height:60,background:'#8e44ad',marginTop:50,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:24,fontWeight:'bold',fontFamily:'Montserrat'}} onClick={()=>submit()}  >
       Submit Record
       
    </div>
    
   
    {jaso?
        
        <div style={{width:'80vw',height:'auto',color:'#fff',background:'#8e44ad',marginTop:30,display:'flex',justifyContent:'center',marginBottom:50,fontWeight:'bold'}}>
            {JSON.stringify(table)}    
        </div>:<></>

    }


</div>

    )
}