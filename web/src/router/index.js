import VueRouter from 'vue-router'
import JobPostings from '@/components/JobPostings'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'JobPostings',
            component: JobPostings
        }
    ]
})
