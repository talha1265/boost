import React from 'react'
import './page.css'
import { useRouter } from 'next/router';
import data from '@/data/data';


const id = () => {
  // console.log(data);

    const router = useRouter();
    const id = router.query.id;

  //    // Find the data object with the matching ID
  // const selectedData = data.find(item => item.id === parseInt(id));

  return (
    <div>
<div className="img">Lorem ipsum {id} amet consectetur adipisicing elit. A atque recusandae totam reprehenderit ratione modi repudiandae facilis ex praesentium perspiciatis accusantium quaerat cumque veritatis unde, laborum voluptatibus sit amet corporis molestias nesciunt porro. Optio enim, accusamus natus quod 
mollitia eos expedita delectus praesentium tenetur eaque necessitatibus earum obcaecati a inventore?</div>
<div className="detailed">
  <h2 className="main-heading"></h2>
    <div className="wrap">
<div className="left-box">

</div>
<div className="middle-box">

</div>
<div className="right-box">

</div>
    </div>
    
</div>

    </div>
  )
}

export default id;
