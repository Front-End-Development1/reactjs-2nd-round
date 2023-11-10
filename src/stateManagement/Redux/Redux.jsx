import React from "react";
import { connect } from "react-redux";
import { increment } from "./Actions";

function Redux({ count, increment }) {
    return (
        <div>
            <h3>Counting example using Redux to manage global state</h3>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    count: state.count,
});

const mapDispatchToProps = {
    increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);

