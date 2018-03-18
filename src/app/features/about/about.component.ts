import { Component } from '@angular/core';

@Component({
  selector: 'cl-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public author = {
    fullName: 'Vadim Ostapets',
    phone: '+380 50 921 69 18',
    email: 'vv342915007@gmail.com',
    git: 'https://github.com/Vadim1010',
    skills: {
      hard: ['J\'S Core', 'Angular 2', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'GIT'],
      soft: ['Working in the team', 'self-management'],
      tools: ['Git', 'GitHub', 'Webpack', 'JetBrains WebStorm', 'NPM - Node Package Manager', 'Jira'],
      software: [
        'Angular 2',
        'TypeScript',
        'RxJs',
        'Bootstrap',
        'Jasmine',
        'JavaScript',
        'ES6 / ECMAScript 2015',
        'AJAX',
        'JQuery',
        'underscore.js',
      ],
      languages: ['English (pre-intermediate)', 'Russian (proficiency)', 'Ukrainian (proficiency)']
    },
    experience: [
      {
        customer: 'EPAM Resource Development (Dnipro)',
        project: ['RD Testing Tool (Create site for company a testing of students)'],
        teamSize: 'Front-End team - 2 persons, Back-End team - 1, TL, BA, PO',
        projectRole: 'Software Engineer/SCRUM Master',
        tasksPerformed: [
          'made build - webpack + angular 4 + TypeScript',
          'create new feature',
          'bug fixing',
          'unit testing'
        ],
        environment: [
          'Git',
          'Jira',
          'Angular 4.3',
          'SASS',
          'Bootsrtap',
          'TypeScript',
          'ES6 / ECMAScript 2015',
          'HTML/CSS',
          'RxJs',
        ],
        period: '2017- ',
      },
      {
        customer: 'LLC "Guild Engineering"',
        project: ['Website Card for Ads'],
        teamSize: 'Front-End team - 1, Back-End team - 1, TL, BA, PO',
        projectRole: 'Software Engineer',
        tasksPerformed: [
          'made build - webpack + angular 4 + TypeScript',
          'create new feature',
          'bug fixing',
          'unit testing'
        ],
        environment: [
          'Bootsrtap',
          'HTML/CSS',
          'JavaScript',
          'JQuery',
          'PhP'
        ],
        period: '2017',
      }
    ],
    education: [
      {
        institution: 'EPAM Resource Development (Dnipro)',
        period: 2017,
        specialization: 'Software Engineer',
        upSkills: [
          'HTML5',
          'CSS3',
          'SCSS',
          'Bootstrap',
          'JavaScript',
          'AJAX',
          'JQuery',
          'TypeScript',
          'Angular 2',
          'RxJs',
          'Jasmine',
          'Git',
          'Webpack'
        ]
      },
      {
        institution: 'Level Up training center',
        period: 2016,
        specialization: 'Front-end Developer',
        upSkills: [
          'HTML5',
          'CSS3',
          'SCSS',
          'JavaScript',
          'Bootstrap',
          'JQuery',
          'Git',
          'Webpack',
          'Angular 1.5',
          'AJAX'
        ]
      },
      {
        institution: 'Institution: Hi5 School ',
        period: 2016,
        specialization: 'Front-end Developer',
        upSkills: [
          'HTML',
          'CSS',
          'JavaScript Essential'
        ]
      },
      {
        institution: 'Interregional Academy of Personnel Management',
        period:  '2013-2016',
        specialization: 'Applied Psychology',
        upSkills: []
      },
      {
        institution: 'Ukrainian State University of Chemical Technology',
        period:  '2004-2010 ',
        specialization: 'The equipment processing and food industries.',
        upSkills: []
      }
    ]
  };
}
