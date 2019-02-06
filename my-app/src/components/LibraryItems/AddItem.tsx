import * as React from "react";
import "../.././css/Additem.css";
import DisplayItem from "./Displayitem";
import InnerBar from './InnerBar'




export default class AddItem extends React.Component {
  public state = {
    items: [
      {
        tit:'',           // stores title of the library item
        isbn:'',          // stores isbn of the library item
        sector:'',        // stores the sector of the library item
        date:'',       // stores the publish date of the library ite,
        type:'',          // stores whether its a book or a dvd
        p:'',             // stores producer/publisher info
        a:'',             // stores author/actor publisher info
        language:'',      // stores the langauge of the book or dvd
        ns:''             // stores subtitle or no.of pages

      }
    ],
    id:true, // decides whcih form to display 
    item: 
      {
        tit:'',           // stores title of the library item
        isbn:'',          // stores isbn of the library item
        sector:'',        // stores the sector of the library item
        date:'',       // stores the publish date of the library ite,
        type:'',          // stores whether its a book or a dvd
        p:'',             // stores producer/publisher info
        a:'',             // stores author/actor publisher info
        language:'',      // stores the langauge of the book or dvd
        ns:''             // stores subtitle or no.of pages
      },
      index:0, // used to record the index at the moment type
      want:false, // display or hide update button,
      type:true // this is to decide on to show books/dvd input field by default true is book
  };

  public addItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newState = Object.assign([], this.state.items);
    
    const newItem = {
      tit: e.currentTarget.tit.value,
      isbn: e.currentTarget.isbn.value,
      sector:e.currentTarget.sector.value,
      date:e.currentTarget.date.value,
      type:e.currentTarget.type.value,
      p:e.currentTarget.p.value,
      a:e.currentTarget.a.value,
      language:e.currentTarget.language.value,
      ns:e.currentTarget.ns.value

    };

    newState.push(newItem);
    this.setState({
      items: newState
    });
    // clearing the form after adding data
    e.currentTarget.isbn.value=''
    e.currentTarget.tit.value=''

    e.currentTarget.sector.value=''
    e.currentTarget.date.value=''
    e.currentTarget.type.value=''
    e.currentTarget.p.value=''
    e.currentTarget.a.value=''
    e.currentTarget.language.value=''
    e.currentTarget.ns.value=''
    
    const sendData={
      method: 'POST',
      body: JSON.stringify(newState),
      headers: {
         'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:9000/addbook', sendData)
     .then((res:any) => res.json())
     .then((res:JSON) => console.log(res));

  }
  public updateItem=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // clearing data after adding data
    e.currentTarget.isbn.value=''
    e.currentTarget.tit.value=''
    e.currentTarget.sector.value=''
    e.currentTarget.date.value=''
    e.currentTarget.type.value=''
    e.currentTarget.p.value=''
    e.currentTarget.a.value=''
    e.currentTarget.language.value=''
    e.currentTarget.ns.value=''
    
    const currentItems = this.state.items
      currentItems[this.state.index]= this.state.item
      this.setState({
        items:currentItems,
        id:true,
        want:false
      })
  }

  public cancelUpdate=()=>{
    
    this.setState({
      want:false,
      item:this.state.items[this.state.index]
    })
  }

  public delEvent(index: any) {
    const newState = Object.assign([], this.state.items);
    newState.splice(index, 1);

    this.setState({
      items: newState
    });
    
  }
 public viewItemChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
   console.log(e.currentTarget.name)
   console.log(e.currentTarget.value)
   
  this.setState({
    item: Object.assign({},this.state.item,{[e.currentTarget.name]:e.currentTarget.value}),
    want:true
    }
  )
  
 }

  public updateViewFrom=(e:React.FormEvent<HTMLFormElement>)=>{
    this.setState({
      id:false
    })
    console.log(e.currentTarget.value)

    this.state.items.forEach(itm=>{
      if(itm.isbn===e.currentTarget.value){
        console.log('done')
        const index = this.state.items.indexOf(itm)
        this.setState({
          item:itm,
          index
          
        })
      }
    })
  }

  // change type for the first form
  public changeType=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    if(e.currentTarget.value.toString()==="book"){
      this.setState({
        type:true
      })
    }else{
      this.setState({
        type:false
      })
    }

  
  }
  
  public changeType2=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    if(e.currentTarget.value.toString()==="book"){
      this.setState({
        type:true,
        item: Object.assign({},this.state.item,{[e.currentTarget.name]:e.currentTarget.value}),
        want:true
      })
    }else{
      this.setState({
        type:false,
        item: Object.assign({},this.state.item,{[e.currentTarget.name]:e.currentTarget.value}),
        want:true
      })
    }

  
  }

  public render() {
    return (

      <div className="all">
      <InnerBar/>
       
       {/* do not forget to put the count of books and dvd */}
       
     { this.state.id ? (
           <div className="form-container">
          <h1>Add Items</h1>
          <form onSubmit={this.addItem} className="form">
            <label className="date-place">ISBN Number</label>
            <input
              type="text"
              className="input-field"
              placeholder="ISBN Number"
              name="isbn"
            />
            <label className="date-place">Title</label>
            <input
              type="text"
              className="input-field"
              placeholder="Title"
              name="tit"
            />
            <label className="date-place">Sector</label>
            <input
              type="text"
              className="input-field"
              placeholder="Sector"
              name="sector"
            />
            <label className="date-place">Publication Date</label>
            <input
              type="date"
              className="input-field"
              id="input-margin"
              placeholder="Publication Date"
              name="date"
            />

            <label className="date-place">Item Type</label>           
            <select className='input-field'name="type" onChange={this.changeType}>
              <option value='book'>Book</option>
              <option value='dvd'>Dvd</option>
             </select>

             {this.state.type ?(
               <div>
                <label className="date-place">Publisher</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Publisher"
                  name="p"
                />
                <label className="date-place">Authors</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Author"
                  name="a"
                />
                <label className="date-place">Language</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Languages"
                  name="language"
                />

                 <label className="date-place">No.of Pages</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Page count"
                  name="ns"
                />
               </div>
             ):(
               <div>
              <label className="date-place">Producer</label>
              <input
                type="text"
                className="input-field"
                placeholder="Producer"
                name="p"
              />

              <label className="date-place">Actors</label>
              <input
                type="text"
                className="input-field"
                placeholder="Actors"
                name="a"
              />

               <label className="date-place">Languages</label>
              <input
                type="text"
                className="input-field"
                placeholder="Languages"
                name="language"
              />
              
              <label className="date-place">Subtitles</label>
              <input
                type="text"
                className="input-field"
                placeholder="Subtitles"
                name="ns"
              />
              </div>
             )}

              <button className="button" id="button-1">
              Add Item
            </button>
            
          </form>
          </div>
       
     ):(
      <div className="form-container">
      <h1>View Item</h1>
      <form  className="form" onSubmit={this.updateItem}>
        <label className="date-place">ISBN Number</label>
        <input
          type="text"
          className="input-field"
          placeholder="ISBN Number"
          name="isbn"
          value={this.state.item.isbn}
          onChange={this.viewItemChange}
        />
        <label className="date-place">Title</label>
        <input
          type="text"
          className="input-field"
          placeholder="Title"
          name="tit"
          value={this.state.item.tit}
          onChange={this.viewItemChange}

        />
        <label className="date-place">Sector</label>
        <input
          type="text"
          className="input-field"
          placeholder="Sector"
          name="sector"
          value={this.state.item.sector}
          onChange={this.viewItemChange}
        />
        <label className="date-place">Publication Date</label>
        <input
          type="date"
          className="input-field"
          id="input-margin"
          placeholder="Publication Date"
          name="date"
          value={this.state.item.date}
          onChange={this.viewItemChange}
        />

        <label className="date-place">Item Type</label>           
        <select className='input-field' name="type" value={this.state.item.type} onChange={this.changeType2}>
          <option value="book">Book</option>
          <option value="dvd">Dvd</option>
         </select>
         
         {this.state.item.type.toString()==="book" ?(
               <div>
                <label className="date-place">Publisher</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Publisher"
                  name="p"
                  value={this.state.item.p}
                  onChange={this.viewItemChange}
                />
                <label className="date-place">Authors</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Author"
                  name="a"
                  value={this.state.item.a}
                  onChange={this.viewItemChange}
                />
                <label className="date-place">Language</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Languages"
                  name="language"
                  value={this.state.item.language}
                  onChange={this.viewItemChange}
                />

                 <label className="date-place">No.of Pages</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Page count"
                  name="ns"
                  value={this.state.item.ns}
                  onChange={this.viewItemChange}
                />
               </div>
             ):(
               <div>
              <label className="date-place">Producer</label>
              <input
                type="text"
                className="input-field"
                placeholder="Producer"
                name="p"
                value={this.state.item.p}
                onChange={this.viewItemChange}
              />

              <label className="date-place">Actors</label>
              <input
                type="text"
                className="input-field"
                placeholder="Actors"
                name="a"
                value={this.state.item.a}
                onChange={this.viewItemChange}
              />

               <label className="date-place">Languages</label>
              <input
                type="text"
                className="input-field"
                placeholder="Languages"
                name="language"
                value={this.state.item.language}
                onChange={this.viewItemChange}
              />
              
              <label className="date-place">Subtitles</label>
              <input
                type="text"
                className="input-field"
                placeholder="Subtitles"
                name="ns"
                value={this.state.item.ns}
                onChange={this.viewItemChange}
              />
              </div>
             )}

         
          
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
        <label>Search Book</label>
        <input type='text' placeholder='Book Name' />
        <label>Sort:</label>
        <select>
          <option value='book'>Book</option>
          <option value='dvd'>Dvd</option>
          <option value='all'>All</option>
        </select>

        <h3>No.of Items</h3>
          {this.state.items.map((item, index) => {
            if (index == 0) {
              return "";
            } else {
              return (
                <DisplayItem
                  title={item.tit}
                  isbn={item.isbn}
                  key={Number(item.isbn)}
                  deleEvent={this.delEvent.bind(this, index)}
                  viewEvent={this.updateViewFrom}
                />
              );
            }
          })}
        </div>
      </div>
      
    );
  }
}
