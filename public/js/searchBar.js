const tags = {};
const init = async () => {
    const response = await fetch("/api/job/get-tags", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    });


    let res = await response.json();
    console.log(res);


    const tagNames = await res.map((apiTag) => {
        return apiTag.tag_name;
    });
    
    await tagNames.forEach(element => {
        console.log(element);
        tags[element] = null;
    });

    // const name = {["name"]: name, "name": name}
    // console.log(name);
    console.log(tags);
}

const handleSearch = (e) => {
    e.preventDefault();

    let searchChips = document.querySelectorAll(".chip");
    console.log(searchChips);
    let searchTags = []
    searchChips.forEach((element) => {
        searchTags.push(element.firstChild.data);
    });
    console.log(searchTags);
    document.location.replace(`/search/${searchTags}`);

}

const updateAutoSelect = (e) => {
    e.preventDefault();
    var elems = document.querySelectorAll(".chips");
    var instances = M.Chips.init(elems, {
        autocompleteOptions: {
        data: tags,
        limit: Infinity,
        minLength: 1,
        },
    });
}

init();

document.addEventListener("DOMContentLoaded", updateAutoSelect);

document.querySelector("#search-button").addEventListener("click", handleSearch)