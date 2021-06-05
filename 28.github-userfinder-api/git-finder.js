// 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

// to-do
// Axios vs. Fetch API
// HTTP Methods

// Preparations
// Axios video from Brad Traversy / Web Simplified
// Navigate Github API page (try look things up by searching with F3)
// HTTP methods tutorial (if any)

const username = document.getElementById("search");
const result = document.querySelector('.result');
username.focus();

/* Find Profile when user press Enter key */
document.addEventListener('keydown', findProfile);

function findProfile(event){
    // Validations
    if(event.key === 'Enter' && username.value){
        // Get Github API info
        axios.get(`https://api.github.com/users/${username.value}` + "?access_token=")
        .then((data) => {
            // Extracted user data object stored as info
            let info = data.data;

            // Create the result element in the DOM
            result.classList.add('active');
            result.innerHTML = `
            <img src="${info.avatar_url}" class="avator" id="avator">

            <div class="info">
                <div id="name">${info.name ? info.name : info.login}</div>
                <div id="bio">${info.bio ? info.bio : ""}</div>
                <div id="status">
                    <div id="followers">${info.followers} Followers</div>
                    <div id="following">${info.following} Followings</div>
                    <div id="repo-count">${info.public_repos} Repos</div>
                </div>
                <div id="repo-list">
                    <p>Recent Repositories Links:</p>
                </div>
            </div>
            `

            // Continue to extract user's repository data
            getRepositories(username.value);
        })
        .catch((err) => {
            result.classList.add('active');
            result.innerHTML = `<p class="error">No result found for query: "${username.value}"</p>`
        })
    }
}

async function getRepositories(name){
    // Get user's repository data, sorted by newest to oldest
    let response = await axios.get(`https://api.github.com/users/${name}/repos?sort=created` + "?access_token=")
    .then((data) => {
        // extract the first 5 data as our info
        let repos = data.data.slice(0,5);
        
        // Add HTML link element for each item extracted to info
        repos.forEach((r) => {
            // Constructing element
            let repoLink = document.createElement('a');
            repoLink.innerText = r.name;
            repoLink.setAttribute('href', `https://github.com/${r.full_name}`);
            repoLink.setAttribute('target', "_blank");
            repoLink.classList.add('repo');

            // Add element to the DOM
            document.getElementById('repo-list').appendChild(repoLink);
        })

        // Special Case where user have no repositories
        if(!repos.length){
            let msg = document.createElement('p');
            msg.innerText = "This user has not created any repository";
            msg.classList.add('no-repo');
            document.getElementById('repo-list').appendChild(msg);
        }
    })
    .catch((err) => {
        console.log("Error on retrieving repositories");
    })
}