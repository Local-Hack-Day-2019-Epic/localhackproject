import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./legoloading.json";
import * as doneData from "./doneloading.json";
import * as heartData from "./heartloading.json";
import * as circlesData from "./circlesloading";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: circlesData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: heartData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export default class Loading extends React.Component {
    
    state = {
        loading: null,
        done: null
    };
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(json => {
                    this.setState({ loading: true });
                    setTimeout(() => {
                        this.setState({ done: true });
                    }, 1000);
                });
        }, 1200);
    }

    showLoadingScreen(){
        if (!this.state.done){
            return (
                <FadeIn>
                    <div class="d-flex justify-content-center align-items-center">
                        <h1>loading...</h1>
                        {!this.state.loading ? (
                            <Lottie options={defaultOptions} height={120} width={120} />
                        ) : (
                            <Lottie options={defaultOptions2} height={120} width={120} />
                        )}
                    </div>
                </FadeIn>
            )
        }
    }

    render() {
        return (
            <div>
                {this.showLoadingScreen()}
            </div>
        );
    }
}