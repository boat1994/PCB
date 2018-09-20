import React from 'react';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux'
import { setLocale } from 'react-redux-i18n'
const locale = require('react-redux-i18n').I18n

class Slider extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      slider: [
        {
          'url': "http://sodagut.com/wp-content/uploads/2018/05/Colin_the_Janitor_Silent_Hill_film-900x500.jpg",
          'label': 'First slide label',
          'desc': 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
          'url': "http://sodagut.com/wp-content/uploads/2018/05/Colin_the_Janitor_Silent_Hill_film-900x500.jpg",
          'label': 'First slide label',
          'desc': 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
          'url': "http://sodagut.com/wp-content/uploads/2018/05/Colin_the_Janitor_Silent_Hill_film-900x500.jpg",
          'label': 'First slide label',
          'desc': 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
          'url': "http://sodagut.com/wp-content/uploads/2018/05/Colin_the_Janitor_Silent_Hill_film-900x500.jpg",
          'label': 'First slide label',
          'desc': 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
          'url': "http://sodagut.com/wp-content/uploads/2018/05/Colin_the_Janitor_Silent_Hill_film-900x500.jpg",
          'label': 'First slide label',
          'desc': 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }
      ],
      persons: []
    };
  }

  componentDidMount() {

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {

    const listItems = this.state.slider.map((data, index) => <Carousel.Item key={index}>
      <img width={2000} alt='eiei' src={data.url}/>
      <Carousel.Caption>
        <h3>{data.label}</h3>
        <p>{data.desc}</p>
      </Carousel.Caption>
    </Carousel.Item>);

    return <h1>{locale.t('welcome')}</h1>;

    // return <Carousel>
    //   {listItems}
    // </Carousel>
  }

};

const mapStateToProps = state => ({
  l: state.i18n.locale,
})


export default connect(mapStateToProps)(Slider);
