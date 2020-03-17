import {connect} from 'react-redux';
import {default as CITIES} from '../../constants/cities';
import WeatherWidget from "../../components/weather/WeatherWidget";
import {fetchWeatherReport} from '../../actions/index';

const mapStateToProps = (state) => {
    return {
        cityList: CITIES,
        report: state.report,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeatherReport: fetchWeatherReport(dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
