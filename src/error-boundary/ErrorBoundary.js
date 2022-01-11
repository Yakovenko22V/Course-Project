import React from "react";
import './error-boundary.scss'

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.warn(error, errorInfo, 'send...');
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='error-page'>
                    <h1>Something went wrong!!!</h1>
                    <h3>Please, reload the page or come back later.</h3>;
                </div>
            )
        }

        return this.props.children;
    }
}