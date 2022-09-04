// import logo from './logo.svg';
import './App.css';
import Ad from './Component/Ad';
import logo from './Component/ionaught.97e3f0ca.png';
import phone from './Component/iphone-13-pro-header-9to5mac (1).jpg'
import phone1 from './Component/nothing-phone-1.jpg'

function App() {
  return (
    <div className="App">
      <header><div className='logo'><img src={logo} alt="" height={25} width={150} fill='white' /></div> <div className='icon'>HOME   |   SHOP   |   CONTACT   |   ABOUT   |   LOGIN</div></header>

      <main>
    <Ad image={phone} product='IPhone 13 Pro' price='65,000Rs' color="#0044ff" h="153px" w="268px"   />
    <Ad image={phone} product='IPhone 13 Pro' price='65,000Rs' color="#0044ff"h="153px" w="268px"   />
    <Ad image={phone} product='IPhone 13 Pro' price='80,000Rs' color="#0044ff"h="153px" w="268px"   />
    <Ad image={phone} product='IPhone 13 Pro' price='65,000Rs' color="#0044ff"h="153px" w="268px"   />
    <Ad image={phone1} product='Nothing X6' price='25,000Rs' color="#0044ff"h="158px" w="268px"   />
    <Ad image={phone1} product='Nothing X6' price='65,000Rs' color="#0044ff"h="158px" w="268px"  />
    <Ad image={phone1} product='Nothing X6' price='96,000Rs' color="#0044ff"h="158px" w="268px"  />
    <Ad image={phone1} product='Nothing X6' price='65,000Rs' color="#0044ff"h="158px" w="268px"  />



      </main>

      <footer> Terms and Conditions <div>©Ionaught Technologies</div> </footer>

    </div>
  );
}

export default App;
