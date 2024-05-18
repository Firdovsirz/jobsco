import React, { useEffect, useState } from 'react';
import "../TopCategoriesSection/TopCategoriesSection.css";
import CategorieIcon1 from "/src/assets/Home/top-cat1.svg";
import CategorieIcon2 from "/src/assets/Home/top-cat2.svg";
import CategorieIcon3 from "/src/assets/Home/top-cat3.svg";
import CategorieIcon4 from "/src/assets/Home/top-cat4.svg";
import CategorieIcon5 from "/src/assets/Home/top-cat5.svg";
import CategorieIcon6 from "/src/assets/Home/top-cat6.svg";

export default function TopCategoriesSection() {
    const categorieIcons = [CategorieIcon1, CategorieIcon2, CategorieIcon3, CategorieIcon4, CategorieIcon5, CategorieIcon6];
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err))
    }, []);
    return (
        <>
            <section className='categories-section'>
                <div className='categories-heading'>
                    <h3>Browse From Top Categories</h3>
                    <p>The automated process starts as soon as clothes go into the machine. The outcome is gleaming clothes.Placeholder text commonly used.</p>
                </div>
                <div className='categories-cards'>
                    {categories.map((element, index) => {
                        return (
                            <div className='categorie-card' key={element.id}>
                                <div className='categorie-icon-container'><img src={categorieIcons[index]} alt="top-cat" /></div>
                                <h3>{element.title}</h3>
                                <p>{element.desc}</p>
                                <button className='browse-btn'>BROWSE JOB</button>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
