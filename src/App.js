import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  personalInfo, 
          profile,
          workExperience, 
          skills,
          education,
          languages,
          interests,
          links,
      } from './cvData';

function Section(props) {
  const title = props.title;
  const items = props.items;
  return (
    <div> 
      <h4>{title}</h4>
      <ul>
        {items}        
      </ul>

    </div>
  )
}

function PersonalInformation(props) {
  const items = personalInfo.map( function(item){
                  return <li key={item.key}>{item.key}: {item.value}</li>
                });
        
  return (
    <Section title="Personal Information" 
            items={items} />
  )
}

function Profile(props) {
  const items = <li key={profile.key}>
                {profile.value} </li>
  return (
    <Section title="Profile" 
              items= {items} />
  )
}

function WorkExperience(props) {
  const items = workExperience.map(function(item){
                  return <li key={item.dates}>
                    {item.dates}
                    <br />
                    <i>{item.titles}</i>
                    <br />
                    {item.roles}
                    <br />
                    {item.company}
                    </li>
                })
  return (
    <Section title="Work Experience"
            items={items} />
  )
}

function Skills(props){
  const items = skills.map(function(item) {
    return <li key={item}>
      {item}
      </li>
  })

  return (
    <Section title="Skills"
            items={items} />
  )
}

function Education(props) {
  const items = education.map(function(item){
                  return <li key={item.dates}>
                    {item.title} - {item.dates} - {item.university}
                    <br />
                    Thesis: {item.thesis}
                    </li>
                })
  return (
    <Section title="Education"
            items={items} />
  )
}

function Languages(props) {
  const items = languages.map(function(item) {
                return <li key={item.language}>
                  {item.language}: {item.level} 
                  </li>                  
  })

  return (
    <Section title="Languages" 
            items={items} />
  )
}

function Interests(props) {
  const items = interests.map(function(item) {
    return <li key={item.key}>
      {item.value}
      </li>
  })

  return (
    <Section title="Interests"
            items={items} />
  )
}

function Links(props) {
  const items = links.map(function(item) {
    return <li key={item.key}>
      <a href={item.value}>{item.key} </a>
      </li>
  })

  return (
    <Section title="Links" 
            items={items} />
  )
}

class App extends Component {
  render() {
    return (
      <main className="MainContainer">
        <PersonalInformation />
        <Profile />
        <WorkExperience />
        <Skills />
        <Education />
        <Languages />
        <Interests />
        <Links />
      </main>
    );
  }
}

export default App;
