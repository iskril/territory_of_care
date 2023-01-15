const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');
const btnsMore = document.querySelectorAll('.btn_more');
const moreItems = document.querySelectorAll('.apartments__more__wrap');
const moreWrap = document.querySelectorAll('.apartments__more');

tabsBtn.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        
        if( !currentBtn.classList.contains('active') ) {
            tabsBtn.forEach((item) => {
                item.classList.remove('active');
            })
            
            tabsItems.forEach((item) => {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});

btnsMore.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-btn');
        let currentTab = document.querySelector(tabId);

        moreItems.forEach((item) => {
            item.classList.remove('active')
        })

        currentTab.classList.add('active')
        
        tabsBtn.forEach((item) => {
            item.addEventListener('click', () => {
                moreItems.forEach((item) => {
                    item.classList.remove('active')
                })
            })
        })

    })
})
btnsMore.forEach((item) => {
    item.addEventListener('click', () => {
        moreWrap.forEach((item) => {
            item.classList.toggle('active')
        })
    })
})
