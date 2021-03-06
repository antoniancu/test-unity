import React, {useState, useEffect} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from './components/Footer';
import Header from './components/Header';
import ListJobs from './components/ListJobs'
import axios from 'axios';
import {sortedUniq, filter} from 'lodash';
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

function App() {
    const jobsPerPage = 9;
    const [state, setState] = useState({
        apidata: {},
        loading: false,
        cities: [],
        cityFilter: '',
        searchFilter: '',
    });
    useEffect(() => {
        async function fetchData() {
            try {
                setState({
                    ...state,
                    loading: true,
                })
                const {data} = await axios
                  .get('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs');
                setState({
                    ...state,
                    loading: false,
                    apidata: data,
                    cities: sortedUniq(data.jobs.map((job) => job.location.name).sort()),
                });
            } catch {
                setState({
                    ...state,
                    loading: false,
                });
                // clean this up in prod, replace with a modal error or some sort of flash message
                alert('Could not get jobs list')
            }
        }

        fetchData();
    }, []);
    const updateCityFilter = (city) => {
        setState({
            ...state,
            cityFilter: city,
        })
    }
    const updateSearchFilter = (query) => {
        setState({
            ...state,
            searchFilter: query
        })
    }
    const filteredJobs = () => {
        return filter(state.apidata.jobs, (job) => {
            if (state.searchFilter) {
                return job.title.toLowerCase().includes(state.searchFilter.toLowerCase()) && job.location.name.includes(state.cityFilter);
            }
            return job.location.name.includes(state.cityFilter)
        })
    }

    return (
      <React.Fragment>
          <CssBaseline/>
          <Header cities={state.cities} updateCityFilter={updateCityFilter} updateSearchFilter={updateSearchFilter}/>
          {state.loading ? <LinearProgress/> : null}
          <main>
              {state.loading
                ? <Typography variant="h6" noWrap> Retrieving job postings...</Typography>
                : <ListJobs jobs={filteredJobs()} jobsPerPage={jobsPerPage}/>}
          </main>
          <Footer/>
      </React.Fragment>
    );
}

export default App;
