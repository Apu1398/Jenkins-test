pipeline {
    agent any
   stages {
        stage('Build') { 
            steps {
                sh 'echo building '
            }
        }
        stage('Test') { 
            steps {
                sh 'echo testing app...'
            }
        }
        stage('Delivery'){
            steps{
                sh 'echo deploy'
            }
        }
    }
}