import './App.css';
import {useGetLaunches} from "./api/useGetLaunches";
import {useCallback, useRef, useState} from "react";

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
        <div className="App">
            <div style={{display:'flex',flexDirection:'column',maxWidth:'300px', maxHeight:"700px"}}>
                {data?.map((launch, index) => {
                    if (data.length === index + 1) {
                        return (
                            <div key={index} ref={lastLaunch} style={{border:'1px solid red', margin:'20px 0'}}>
                                <img src={launch.links.flickr_images[0]} style={{width:'100px', height:'100px', objectFit:'cover'}}/>
                                <div>
                                    <h1>{launch.mission_name}</h1>
                                    <p>{launch.details}</p>
                                </div>

                            </div>)
                    }else{
                        return (
                            <div key={index} style={{border:'1px solid red', margin:'20px 0'}}>
                                <img src={launch.links.flickr_images[0]} style={{width:'100px', height:'100px', objectFit:'cover'}}/>
                                <div>
                                    <h1>{launch.mission_name}</h1>
                                    <p>{launch.details}</p>
                                </div>
                            </div>)
                    }

                })}
                {
                    error && <h1>{error}</h1>
                }
                {
                    loading && <h1 style={{padding:'20px 0'}}>Loading...</h1>
                }
            </div>
        </div>
    );
}

export default App;
