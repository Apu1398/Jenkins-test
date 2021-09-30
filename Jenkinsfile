pipeline {
   stages {
        stage('Build') { 
            steps {
                sh 'docker build -t angular'
            }
        }

        stage('Test') { 
            steps {
                sh 'echo testing app...'
            }
        }

        stage('Delivery'){
            steps{
                sh 'docker run --rm angular'
            }
        }
    }
}
