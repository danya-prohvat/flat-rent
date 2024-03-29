import React from 'react';
import styles from "./ChoiceFlat.module.css";
import classNames from 'classnames';
import FlatFilter from "./FlatFilter/FlatFilter";
import FlatAds from "./FlatAds/FlatAds";
import Pagination from "./Pagination/Pagination";
import {connect} from "react-redux";
import {setActivePageCreator, filterCreator} from "../../rudux/flatCollection-reducer";


const ChoiceFlat = (props) => {

    return (<div className={classNames(styles.choiceFlat)}>
        <div className={classNames(styles.choiceFlat__wrapper)}>
            <FlatFilter citiesSet={props.citiesSet} filterCreator={props.filterCreator} />
            <FlatAds flats={props.flats} activePage={props.activePage} pageSize={props.pageSize}/>
        </div>
        <div className={classNames(styles.choiceFlat__wrapper)}>
            <Pagination setActivePageCreator={props.setActivePageCreator} totalItemCount={props.flats.length} activePage={props.activePage} pageSize={props.pageSize}/>
        </div>

    </div>);
}

let mapStateToProps = (state) => ({
    flats: state.flatCollectionPage.flats,
    activePage: state.flatCollectionPage.activePage,
    pageSize: state.flatCollectionPage.pageSize,
    citiesSet: state.flatCollectionPage.citiesSet,
})

export default connect(mapStateToProps, {setActivePageCreator, filterCreator})(ChoiceFlat);
