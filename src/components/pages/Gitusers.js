import React, {useState} from 'react'
import DisplayTable from './DisplayTable';

const Gitusers = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  }
  const submitHandler = async e =>{
    e.preventDefault();
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);
    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
     //console.log(repoJson);
    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  }
  return (
    <>
      <div className='mt-5 ms-5'>
          <h2>Gitusers Page</h2>
          <div className="row input-row-holder mb-3">
            <div className='col-md-8 pe-0'>
              <input type="text" placeholder='Search Username Here' className='form-control' value={username} onChange={onChangeHandler}/>
            </div>
            <div className='col-md-4 ps-0'>
              <button className='btn btn-primary' type="submit" onClick={submitHandler}>Search</button>
            </div>
          </div>
          <DisplayTable data={data} repositories={repositories}/>
      </div>
    </>
  )
}

export default Gitusers