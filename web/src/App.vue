<template>
    <v-app>
        <v-content>
            <JobPostings/>
        </v-content>
    </v-app>
</template>

<script>
    import JobPostings from './components/JobPostings.vue'

    export default {
        name: 'App',
        components: {
            JobPostings
        },
        data() {
            return {}
        }
    }
</script>
