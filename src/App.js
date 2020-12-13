import React, {useState, useEffect} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from './components/Footer';
import Header from './components/Header';
import ListJobs from './components/ListJobs'
import axios from 'axios';
import {sortedUniq, filter} from 'lodash';
import LinearProgress from "@material-ui/core/LinearProgress";

function App() {
    const jobsPerPage = 9;
    const [state, setState] = useState({
        apidata: {},
        loading: false,
        cities: [],
        cityFilter: '',
        searchFilter: '',
        pageCount: 1,
        currentPage: 1,
    });

    useEffect(() => {
        async function fetchData() {
            try {
                setState({
                    ...state,
                    loading: true,
                })
                const { data } = await axios
                  .get('https://boards-api.greenhouse.io/v1/boards/unity3d/jobs');
                setState({
                    ...state,
                    loading: false,
                    apidata: data,
                    cities: sortedUniq(data.jobs.map((job) => job.location.name).sort()),
                    pageCount: Math.ceil(data.jobs.length/jobsPerPage)
                });
            } catch {
                setState({
                    ...state,
                    loading: false,
                });
                alert('Could not get jobs list')
            }
        }
        fetchData();
    }, []);
    const updateCityFilter = (city) => {
        setState({
            ...state,
            cityFilter: city
        })
    }
    const updateSearchFilter = (city) => {
        setState({
            ...state,
            searchFilter: city
        })
    }
    const filteredJobs = () => {

        return filter(state.apidata.jobs, (job) => {
            if (state.searchFilter) {
                const results = job.title.toLowerCase().includes(state.searchFilter.toLowerCase()) && job.location.name.includes(state.cityFilter);
                setState({
                    ...state,
                    currentPage: 1,
                    pageCount: results.length/jobsPerPage
                })
                return results;

            }
            return job.location.name.includes(state.cityFilter)
        })
    }

    const paginatedJobs = () => {
            return filteredJobs().slice((state.currentPage - 1) * jobsPerPage, state.currentPage * jobsPerPage)
    }

    const onChangePage = (page) => {
        setState({
            ...state,
            currentPage: page
        });
    }



    return (
      <React.Fragment>
          <CssBaseline/>
          <Header cities={state.cities} updateCityFilter={updateCityFilter} updateSearchFilter={updateSearchFilter}/>
          {state.loading ? <LinearProgress/> : null}
          <main>
              {state.loading
                ? <h2>Loading Jobs</h2>
                : <ListJobs jobs={paginatedJobs()} pageCount={state.pageCount} currentPage={state.currentPage} changePage={onChangePage}/>}
          </main>
          <Footer/>
      </React.Fragment>
    );
}

export default App;
