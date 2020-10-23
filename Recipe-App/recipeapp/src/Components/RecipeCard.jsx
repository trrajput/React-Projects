import React from 'react'

function RecipeCard(props) {
    const { items } = props
    return (
        <>
            <div class="col-sm-4 mt-3">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={`https://c.ndtvimg.com/2019-04/tgoepg6_summer-2019-vegetarian-recipes_625x300_10_April_19.jpg`} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <div>
                            <h3 className="text-primary">{items.name}</h3>
                        </div>
                        <p className="card-text">{items.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeCard;
