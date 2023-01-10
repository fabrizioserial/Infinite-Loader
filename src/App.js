import './App.css';
import {useGetLaunches} from "./api/useGetLaunches";
import {useCallback, useRef, useState} from "react";
import Card from "./component/Card";

function App() {
    const [page, setPage] = useState(0)
    const {data, loading, error} = useGetLaunches({page: page});

    const observer = useRef()
    const lastLaunch = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(prevPage => prevPage + 10)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading])

    return (
        <div className="App" style={{backgroundColor:"#282c34", overflowY:'auto',display:'flex',alignItems:'center', justifyContent:'center'}} >
            <div style={{display:'flex',flexDirection:'column',maxWidth:'600px', maxHeight:"700px", color:'white'}}>
                {data?.map((launch, index) => {
                    if (data.length === index + 1) {
                        return (
                            <Card reference={lastLaunch} mission_name={launch.mission_name} details={launch.details} src={launch.links.flickr_images[0]} />)
                    }else{
                        return (
                            <Card reference={null} mission_name={launch.mission_name} details={launch.details} src={launch.links.flickr_images[0]} />)
                    }

                })}
                {
                    error && <h1>{error}</h1>
                }
                {
                    loading &&
                        <div style={{width:'600px',border: "1px solid #5a6472",backgroundColor:"#2c323a",borderRadius:'10px'}}>
                            <h1 style={{padding:'20px 0'}}>Loading...</h1>
                        </div>
                }
            </div>
        </div>
    );
}

export default App;
