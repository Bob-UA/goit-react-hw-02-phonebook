import { Component } from 'react';
import css from './App.module.css';
import ContactForm from "./ContactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };


  handleSubmitForm = (data)=> {
  console.log(data);
}
 
  
  render() {
    return (
      <div className={css.container}>
        <ContactForm
          onSubmit={this.handleSubmitForm}
        />
      </div>
    );
  }
}

export default App;