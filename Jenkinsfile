pipeline {
    agent {
        docker {
            image 'node:lts'
            args '-p 4200:4200'
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
        stage('Deliver') {
            steps {
                sh 'npm run ng serve'                
            }
        }
    }
}
