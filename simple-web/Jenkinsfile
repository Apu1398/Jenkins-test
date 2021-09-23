pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'cd simple-web'
                sh 'npm install' 
            }
        }

        stage('Test') { 
            steps {
                sh 'echo testing app...'
            }
        }

        stage('Delivery'){
            steps{
                sh 'npm run ng build --prod'
            }
        }
    }
}