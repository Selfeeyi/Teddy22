import { useState } from "react";

const NavTabs = ({ tabs }) => {
  const titleArray = tabs.map((item) => item.value);
  console.log("titleArray", titleArray);

  const [activeTab, setActiveTab] = useState(tabs[0]?.value);
  console.log("activeTab", activeTab);

  function changeTab(event) {
    setActiveTab(event.target.textContent);
  }

  function setActiveContent(activa) {
    const try_1 = tabs.filter((x) => x.value === activa);
    const try_2 = try_1[0]?.content;
    return try_2;
  }

  const defaultStyle = {
    padding: '0.75rem',
    color: '#727272',
    cursor: 'pointer',
    textAlign: 'center',
    lineHeight: '21px',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    fontFamily:"DexaSemi"
  };
  
  const activeStyle = {
    padding: '0.75rem',
  color:'var(--background-color)',
    borderBottom: '4px solid var(--background-color)',
    cursor: 'pointer',
    textAlign: 'center',
    lineHeight: '21px',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    fontFamily:"DexaSemi"
  };



  return (
    <div className="">
      <div  style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        {titleArray.map((x) => (
          <div
            key={x}
            style={activeTab === x ? activeStyle : defaultStyle}
            onClick={changeTab}
          >
            {x}
          </div>
        ))}
      </div>
      {setActiveContent(activeTab)}
    </div>
  );
};

export default NavTabs;