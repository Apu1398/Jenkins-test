pipeline {
    agent any
   stages {
        stage('Build') { 
            steps {
                bat '''  npm install  '''
                
            }
        }
        stage('Test') { 
            steps {
                bat '''  ECHO testing  '''
            }
        }
        stage('Delivery'){
            steps{
                bat '''  npm run ng serve  '''
            }
        }
    }
}