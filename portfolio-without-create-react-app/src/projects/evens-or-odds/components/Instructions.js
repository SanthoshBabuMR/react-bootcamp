import React, {Component} from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

class Instructions extends Component {
    
    render() {
        return (
            <div>
                <h3>Instructions</h3>
                {
                    this.props.instructionsExpanded ?
                    (
                        <div>
                            <p>Welcome to even or odds. The game goes like this...</p>
                            <p>The only rule is: There are no RULES!!</p>
                            <button onClick={this.props.hide}>Show less</button>
                        </div>
                    )
                    :
                    (
                        <div>
                            <p>Welcome to even or odds. The game goes like this...</p>
                            <button onClick={this.props.view}>Read More</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        instructionsExpanded: state.settings.instructionsExpanded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        view: () => dispatch(expandInstructions()),
        hide: () => dispatch(collapseInstructions())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);

