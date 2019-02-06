 import * as  React from 'react'
 import InnerBar from '../LibraryItems/InnerBar'
 import '../../css/Additem.css'
 import DisplayReaders from './DisplayReaders'

export default class MangeReader extends React.Component {
 
   public state={
        id:true,
        readers:[{
            rid:"",
            fname:"",
            lname:"",
            isdate:"",

        }],
       reader: {
            rid:"",
            fname:"",
            lname:"",
            isdate:"",

        },
        want:false,// to display the update and cancel buttons
        index:0 
    }
   
 // Used to add readers to the side div
  public addReader=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const newState = Object.assign([], this.state.readers);

    const newReader = {
      rid: e.currentTarget.rid.value,
      fname: e.currentTarget.fname.value,
      lname: e.currentTarget.lname.value,
      isdate: e.currentTarget.isdate.value

    };

    newState.push(newReader);
    this.setState({
      readers: newState
    });
    // clearing the form after adding data
    e.currentTarget.fname.value=''
    e.currentTarget.lname.value=''
    e.currentTarget.rid.value=''
    e.currentTarget.isdate.value=''



  }

// Used to Update the reader info when form is submitted
public updateReader=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // clearing data after adding data
    e.currentTarget.rid.value=''
    e.currentTarget.fname.value=''
    e.currentTarget.lname.value=''
    e.currentTarget.isdate.value=''
    
    const currentReaders = this.state.readers
      currentReaders[this.state.index]= this.state.reader
      
      this.setState({
        readers:currentReaders,
        id:true
      })
   
     }
// changes the reader object according to every form input
public viewReaderChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.currentTarget.name)
   console.log(e.currentTarget.value)
   
  this.setState({
    reader: Object.assign({},this.state.reader,{[e.currentTarget.name]:e.currentTarget.value}),
    want:true
    }
  )
   
     }
// To cancel the update in the view Readere
public cancelUpdate=()=>{
    this.setState({
        want:false,
        reader:this.state.readers[this.state.index]
      })
}
// to remove the reader from the side div list

public delEvent=(index:any)=>{
    const newState = Object.assign([], this.state.readers);
    newState.splice(index, 1);

    this.setState({
      readers: newState
    });
    
}
public updateViewFrom=(e: React.FormEvent<HTMLFormElement>)=>{
    this.setState({
        id:false
      })
      console.log(e.currentTarget.value)
  
      this.state.readers.forEach(rd=>{
        if(rd.rid===e.currentTarget.value){
          console.log('done')
          const index = this.state.readers.indexOf(rd)
          this.setState({
            reader:rd,
            index
            
          })
        }
      })
  
}
 
 
 
    public render() {
      
    return (
        <div className="all">
        <InnerBar/>
        
         {/* do not forget to put the count of books and dvd */}
         
       { this.state.id ? (
             <div className="form-container">
            <h1>Add Readers</h1>
            <form onSubmit={this.addReader} className="form">
              <label className="date-place">Reader Id</label>
              <input
                type="text"
                className="input-field"
                placeholder="Reader ID"
                name="rid"
              />
              <label className="date-place"> Reader First Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="Reader First Name"
                name="fname"
              />
              <label className="date-place">Reader's Last Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="Reader's Last Name"
                name="lname"
              />
              <label className="date-place">Membership Issued Date</label>
              <input
                type="date"
                className="input-field"
                id="input-margin"
                name="isdate"
              />
  
                <button className="button" id="button-1">
                Add 
              </button>
              
            </form>
            </div>
         
       ):(
        <div className="form-container">
        <h1>View Reader</h1>
        <form  className="form" onSubmit={this.updateReader}>
          <label className="date-place">Reader Id</label>
          <input
            type="text"
            className="input-field"
            placeholder="Reader ID"
            name="rid"
            value={this.state.reader.rid}
            onChange={this.viewReaderChange}
          />
          <label className="date-place">Reader's First Name</label>
          <input
            type="text"
            className="input-field"
            placeholder="Reader's First Name"
            name="fname"
            value={this.state.reader.fname}
            onChange={this.viewReaderChange}
  
          />
          <label className="date-place">Reader's Last Name</label>
          <input
            type="text"
            className="input-field"
            placeholder="Reader's Last Name"
            name="lname"
            value={this.state.reader.lname}
            onChange={this.viewReaderChange}
          />
          <label className="date-place">Membership Issue Date</label>
          <input
            type="date"
            className="input-field"
            id="input-margin"
            placeholder="Membership Issue Date"
            name="isdate"
            value={this.state.reader.isdate}
            onChange={this.viewReaderChange}
          />
  
        
            { this.state.want ?(
              <div>
               <button className="button" id="button-2" onClick={this.cancelUpdate}>
               Cancel
             </button>
            <button className="button" id="button-1">
            Update
          </button>
          </div>
          ):''
            }
          </form>
          </div>
       )
  
       }
          <div className="item-list display-list">
            {this.state.readers.map((read, index) => {
              if (index == 0) {
                return "";
              } else {
                return (
                  <DisplayReaders
                    rid ={read.rid}
                    fname={read.fname}
                    key={Number(read.rid)}
                    deleEvent={this.delEvent.bind(this, index)}
                    viewEvent={this.updateViewFrom}
                  />
                );
              }
            })}
          </div>
        </div>
        
  
    )
  }
}
