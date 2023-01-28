export const projects = [
{
    id: 1,
    title: 'Message Generator',
    description: 'Implement dashboard to generate & manage thank-you messages using OpenAI API GPT-3',
    media: 'message-generator.mov',
    image: 'message-generator-after.png',
    features:['Present response of REST API as a table format', 
    'Save & delete functionality to manage messages from database',
    'Responsive design for desktop, tablet & mobile',
    'Style with external UI (Chakra UI)'],
    skills: ['NextJS', 'React', 'JavaScript', 'MongoDB', 'SCSS', 'Chakra UI'],
    detail:{
        copy:'Source Code',
        link:'https://github.com/yen-han/AI-Message-Generator'
        // link:'/projects/MessageGenerator'
    }
},
{
    id: 2,
    title: 'Grade Calculator',
    description: 'Develop program to track GPA on multiple courses applied various weighted marks',
    media: 'grade-calculator.mp4',
    image: 'message-generator-after.png',
    features:['Implement CRUD operations(Create-Read-Update-Delete)', 
    'Compute different weighted scores using inheritance & polymorphism',
    'Bubble sort algorithm to filter best marks',
    'Safeguard from unexpected inputs such as negative scores, case sensitivity'],
    skills: ['C++'],
    detail:{
        copy:'Source Code',
        link:'https://github.com/yen-han/GradeCalculator'
    }
}
];

