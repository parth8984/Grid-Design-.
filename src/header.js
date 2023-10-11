function Header(props){
    return(
            <>
              <div id="header">
        <div id="Sub-header">
            <a id="logo-story"><div id="logoName"> EDYODA</div>
            <p id="story">Stories</p>
            </a>
            
            <div id="exploreSection">
                <p>Explore Categories</p>
                <span id="dropdown"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="/></span>
                </div>
                <ul id="BlogNavigation">
                <p id="blogLinks">EdYoda is a learning and knowledge<p id="secndline"> sharing platform for techies</p> </p>
                <button >Go To Main Website </button>
                </ul></div>
                <div id="filterSection">
                <p id="by">Latest Posts</p>
                <div >
                <img id="filterIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
                  />
              <p id="fiter-cat">Filter by Category</p></div>
              <div id="cato"> 
     <div id="backColor"
     class="cat-sec">All</div>
     <div class="cat-sec">Artificial intelligence</div>
     <div class="cat-sec">Cloud Computing</div>
     <div class="cat-sec">DevOps</div>
     <div class="cat-sec">Programming Language</div>
     <div class="cat-sec">Mobile Application Development</div>
     <div class="cat-sec">Technology and tools</div>
     <div class="cat-sec">Get a Job in a Tech Company</div>
     <div class="cat-sec">Others</div>

    </div>
     </div>
     </div>  </>

    
    )
    }



export default Header;