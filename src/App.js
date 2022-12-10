import Albums from "./components/Albums/main.albums";
import MainLayouts from "./Layouts/main.layouts";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// function testing() {
//   return <h1>TESTING</h1>
// }

// function App() {
//   return (
//     //React.Fragment sama saja dengan <></>
//     //dengan menggunakan React.Fragment maka akan mempermudah ketika ingin memasukkan sebuah event

//     <React.Fragment>
//       <h1>TESTING</h1>
//       {testing()}
//     </React.Fragment>
//   );
// }

// class App extends React.Component {

//   componentWillMount() {
//     console.log("will mounting")
//   }

//   componentDidMount() {
//     console.log("did mounting")
//   }

//   render() {
//     return <h1>TESTING</h1>;
//   }
// }

const App = () => {
  // state memiliki dua parameter
  // yang kiri adalah nilai akhir
  // yang kanan adalah untuk mengset nilainya
  // const [limit, setLimit] = useState(0);
  // const [getMyName, setGetMyName] = useState("Adam  Christoper")
  // const inputNameRef = useRef(getMyName)

  // useEffect(() => {
  //   setGetMyName(inputNameRef.current.value)
  //   // console.log('getLimit: ', limit)
  // }, [limit])
  //siku kosong digunakan agar hanya merender ketika website pertama kali dibuka

  return (
    // <>
    //   <h1>testing</h1>
    //   <center>
    //     {getMyName}
    //     {limit}
    //     <br />
    //     <input placeholder="Nama" defaultValue={inputNameRef.current} ref={inputNameRef}/>
    //     {/* <input placeholder="Nama" onChange={(e) => setGetMyName(e.target.value)}/> */}
    //     <button onClick={() => setLimit((prev) => prev + 1)}>naikkan limit</button>
    //     <button onClick={() => setLimit((prev) => prev - 1)}>turunkan limit</button>
    //   </center>
    //   <Testing title="HELLO BANG" description="apaan sih bang hehehe"/>
    // </>
    <>
      <MainLayouts>
        <Router>
          <Routes>
          <Route path="/" element={<h1>HOMEPAGE</h1>} />
            <Route path="/albums" element={<Albums/>} />
            <Route path="/posts" element={<h1>POSTING</h1>} />
            <Route path="*" element={<h1 className="text-center text-danger">404 NOT FOUND</h1>} />
          </Routes>
        </Router>
        {/* <Albums title="INI IMAGES" description="we fetch random image API from third party"/> */}
      </MainLayouts>
    </>
  );
};

export default App;
