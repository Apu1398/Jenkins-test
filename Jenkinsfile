pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
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