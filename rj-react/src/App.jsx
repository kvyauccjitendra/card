import { useState } from 'react';
import Card from './components/Card';

const App = () => {
    const [count, setCount] = useState(0);
    /* const usersArr = ["Rohit","Anjali","Akash","Prem"] */
   /*  const arrobject = [
            {
              user:"Rohit",
              ager:"25",
              role:"UI/UX Developer",
              salary:"75K",
            },
            {
              user:"Anjali",
              ager:"26",
              role:"Frontend Developer",
              salary:"35K",
            },
            {
              user:"Akash",
              ager:"26",
              role:"Fullstack Developer",
              salary:"75K",
            },
            {
              user:"Prem",
              ager:"30",
              role:"PHP API Developer",
              salary:"40K",
            },
            {
              user:"Gaurav Sharma",
              age:"25",
              role:"Fullstack Developer",
              salary:"55K",
            }
    ] */
   const jobOpenings = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    company: "Google",
    post: "Frontend Developer",
    posted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://blog.logomaster.ai/assets/site/7a/7a420899861b05a6512dbb961034a2b771b54123f13e4396cd5f4e5d7fa4d958.jpg",
    company: "Microsoft",
    post: "React Developer",
    posted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651108.jpg",
    company: "Amazon",
    post: "Backend Developer",
    posted: "1 day ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    company: "Meta",
    post: "UI/UX Designer",
    posted: "3 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    company: "Apple",
    post: "iOS Developer",
    posted: "1 week ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    company: "Netflix",
    post: "Software Engineer",
    posted: "2 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    company: "NVIDIA",
    post: "Machine Learning Engineer",
    posted: "4 weeks ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2DQp1blu4d-2gFr5CZ1BnRW0lT0BS6S-euo4wf2LuA&s=10",
    company: "Adobe",
    post: "Full Stack Developer",
    posted: "5 weeks ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLLWlnJprnk5oALWHbR2e018Vl8ghFl6ooO9on8sU9Q&s=10",
    company: "Salesforce",
    post: "Cloud Developer",
    posted: "6 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/02/Color-IBM-Logo.jpg",
    company: "IBM",
    post: "Java Developer",
    posted: "3 weeks ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Chennai, India"
  }
];
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                Count {count}
            </button>

            <button onClick={() => setCount((count) => count * 0)}>
                Reset Count
            </button>
            <div className="parent">
              {jobOpenings.map((elem, elmindx)=>{
                return (
                  <div key={elmindx}>
                    <Card brandlogo={elem.brandLogo} company={elem.company} post={elem.post} posted={elem.posted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
                  </div>
                )
              })}
              
              {/* {usersArr.map(function(Ele){
                return Ele+"  ";
              })}

              {arrobject.map((elem, elmindx)=>{
                  return (
                    <div key={elmindx}>
                      <h2>Developer: {elem.user}</h2>
                      <h3>Age: {elem.age}</h3>
                      <h2>Role: {elem.role}</h2>
                      <h2>Salery: {elem.salary}</h2>
                    </div>
                  );
              })} */}
            </div>
        </div>
    );
};

export default App;