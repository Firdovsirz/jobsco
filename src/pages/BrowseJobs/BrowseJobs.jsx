import React, { useEffect, useState } from 'react';
import "../BrowseJobs/BrowseJobs.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Select from '@mui/material/Select';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import jobImage1 from "/src/assets/BrowseJobs/job-image-1.svg"
import jobImage2 from "/src/assets/BrowseJobs/job-image-2.svg"
import jobImage3 from "/src/assets/BrowseJobs/job-image-3.svg"
import jobImage4 from "/src/assets/BrowseJobs/job-image-4.svg"
import jobImage5 from "/src/assets/BrowseJobs/job-image-5.svg"

export default function BrowseJobs() {
    const jobImages = [jobImage1, jobImage2, jobImage3, jobImage4, jobImage5];
    const [location, setLocation] = React.useState('');

    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/availableJobs?id_lte=5');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    console.log(data);
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
                    <section className='browse-jobs'>
                        <div className='job-listing'>
                            <p>Job Listing</p>
                            <div className='recent-div'>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Most Recent</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={location}
                                            label="Location"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"developer"}>Developer</MenuItem>
                                            <MenuItem value={"designer"}>Designer</MenuItem>
                                            <MenuItem value={"marketer"}>Marketer</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
                        <div className='available-jobs'>
                            {data.map((item, index) => {
                                return (
                                    <div className='available-job-desc'>
                                        <div className='aval-job-main'>
                                            <img src={jobImages[index]} alt="" />
                                            <div className='aval-job-title'>
                                                <h2>{item.title}</h2>
                                                <div className='aval-job-location'>
                                                    <div>
                                                        <LocationOnIcon style={{ color: '#c2c2c2' }} />
                                                        <p>{item.location}</p>
                                                    </div>
                                                    <div>
                                                        <AccessTimeIcon style={{ color: '#c2c2c2' }} />
                                                        <p>{item.jobType}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='aval-job-apply'>
                                            <div className='apply-btn-container'>
                                                <button className='aval-job-apply-btn'>
                                                    Apply Now
                                                </button>
                                            </div>
                                            <p>Date line: {item.date}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </section>
            </main>

            <Footer />
        </>
    )
}
