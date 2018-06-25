import React from "react";
import { connect } from "react-redux";
import { fetchSports } from "../actions/index";

class SportTreeContainer extends React.Component
{
    componentDidMount() {
        this.props.dispatch(fetchSports());
    }

    render() {
        const {error, loading, elements} = this.props;

        if (error)
            return <div>Error! {error.message}</div>;        

        if (loading)
            return <div>Loading...</div>;        

        return (
                <ul>
                    {elements.map(element =>
                                        <li key={element.id}>{element.name}</li>
                                )}
                </ul>
                );
    }
}

const mapStateToProps = state => ({
        elements: state.elements.elements,
        loading: state.elements.loading,
        error: state.products.error
    });

export default connect(mapStateToProps)(SportTreeContainer);