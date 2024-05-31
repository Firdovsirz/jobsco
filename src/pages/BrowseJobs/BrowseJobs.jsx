import React from 'react';
import "../BrowseJobs/BrowseJobs.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BrowseJobs() {
    const [location, setLocation] = React.useState('');

    const handleChange = (event) => {
        setLocation(event.target.value);
    };
    return (
        <>
            <Header />
            <main className='browse-job-main'>
                <section className='browse-jobs-heading'>
                    <h1>Browse Jobs</h1>
                </section>
                <section className='browse-main'>
                    <aside className='browse-jobs-filter'>
                        <h3>Filter</h3>
                        <Box sx={{ minWidth: 120, marginBottom: 3 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={location}
                                    label="Location"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"California"}>California</MenuItem>
                                    <MenuItem value={"Tbilisi"}>Tbilisi</MenuItem>
                                    <MenuItem value={"Baku"}>Baku</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 120, marginBottom: 3 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Experience</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={location}
                                    label="Location"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"<1"}>Less than 1 year</MenuItem>
                                    <MenuItem value={"1<="}>1 year or more</MenuItem>
                                    <MenuItem value={"1<"}>More than 1 year</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 120, marginBottom: 3 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Job type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={location}
                                    label="Location"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"partTime"}>Part time</MenuItem>
                                    <MenuItem value={"fullTime"}>Full time</MenuItem>
                                    <MenuItem value={"intern"}>Internship</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 120, marginBottom: 3 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Qualification</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={location}
                                    label="Location"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"partTime"}>Software Developer</MenuItem>
                                    <MenuItem value={"fullTime"}>Frontend Developer</MenuItem>
                                    <MenuItem value={"intern"}>Backend Developer</MenuItem>
                                    <MenuItem value={"intern"}>IT Support</MenuItem>
                                    <MenuItem value={"intern"}>Data Analyst</MenuItem>
                                    <MenuItem value={"intern"}>DevOps</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 120, marginBottom: 3 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Salary</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={location}
                                    label="Location"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"partTime"}>Less than 1000</MenuItem>
                                    <MenuItem value={"fullTime"}>More than 1000</MenuItem>
                                    <MenuItem value={"intern"}>Less than 2000</MenuItem>
                                    <MenuItem value={"intern"}>More than 2000</MenuItem>
                                    <MenuItem value={"intern"}>Less than 5000</MenuItem>
                                    <MenuItem value={"intern"}>More than 5000</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <button>Reset</button>
                    </aside>
                    {/* <section className='browse-jobs'>
                        <h1>hello</h1>
                    </section> */}
                </section>
            </main>

            <Footer />
        </>
    )
}
