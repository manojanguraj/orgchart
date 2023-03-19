import React from "react";
import { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import  './Charts.css'

const Chart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      name: "Manoj",
      designation: "CEO ",
      children: [
        {
          name: "Vivek",
          designation:"vicepresident",
          department:"Finance",
          children:[
            {
            name: "Ross",
            designation:"Cheif accountant",
            department:"Manufacturing",
            children:[{
              name:"ravi",
            }]},
            {
              name: "Joey",
              designation:"budget analyst",
              department:"humanresources",
            }
          ]
        },
        {
          name: "Kishore",
          designation:"vicepresident",
          department:"Manufacturing",
          children:[
              {
              name: "Monica",
              designation:"plant superindent",
              department:"Manufacturing",},
              {
                name: "Phoebe",
                designation:"maintence superindent",
                department:"Manufacturing",
              }
            ]
        },
        {
          name: "Harish",
          designation:"Director",
          department:"humanresorce",
          children:[
            {
            name: "cooper",
            designation:"Training Specialist",
            department:"Manufacturing",},
            {
              name: "Bob",
              designation:"Benifits administrator",
              department:"Manufacturing",
            }
          ]
         
        },
      ],
    },
  ];

  // const visibleChild = () => {
  //   setIsOpen((!isOpen));
  // }

  const handleClick = (item) => {
    console.log("cominginside")
    alert("hi, this is "+item.name + " I'm "+item.designation)
  }
 const renderTree =(item) =>{
   return (<div onClick={()=>handleClick(item)} className="card">
   <img style={{width:64,height:64}} src={"./profile.jpg"} alt="Avatar" class="img"></img> 
   <h5>{item.name}</h5>
  <p >{item.designation}</p>
  <p>{item.department}</p>
</div>
   )
 }
  return (
    <div className="nayanaeclass">
      <div>
      <h1 className="orgHeader">Organizational Chart</h1>
      </div>
      <div>
      { data.map((item) => 
      <Tree  lineStyl
        lineWidth={"1.2px"}
        lineColor={"grey"}
        lineBorderRadius={"1px"}
        label={renderTree(item)} 
          >  
          {/* {isOpen &&<div>  */}
            {item.children.map((level2) =>
             <TreeNode label={renderTree(level2)} >
              
              {level2.children.map((level3) => 
                <TreeNode label={renderTree(level3)} > 
              
              <TreeNode ></TreeNode>
              </TreeNode>
              )}   
           </TreeNode>
            )}
            {/* </div>} */}
       </Tree>
      )}
      </div>
    </div>
  );
};

export default Chart;






