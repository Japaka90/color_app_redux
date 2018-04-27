import { connect } from 'react-redux';
import InfoTable from '../components/infoTable';

const mapStateToProps = state => ({
  state: state.countState
});

const InfoTableWrapper = connect(mapStateToProps)(InfoTable);

export default InfoTableWrapper;
