import {connect} from 'react-redux';
import {default as CITIES} from '../../constants/cities';
import CitySelect from "../../components/weather/CitySelect";
import {fetchWeatherReport} from '../../actions/index';

const mapStateToProps = (state) => {
    return {
        cityList: CITIES,
        report: state.report
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeatherReport: fetchWeatherReport(dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CitySelect);
