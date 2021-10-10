pipeline {
    agent any
   stages {
        stage('Build') { 
            steps {
                bat ''' cd WebApp '''
                bat ''' npm i'''
                bat ''' npm run build '''
                bat ''' docker build -t web-app .'''
                bat ''' cd ../Api '''
                bat ''' npm i '''
                bat ''' docker build -t api .'''
            }
        }
        stage('Test') { 
            steps {
                bat '''  ECHO testing  '''
            }
        }
        stage('Delivery'){
            steps{
                bat ''' FOR /f "tokens=*" %i IN ('docker ps -q') DO docker stop %i '''
                bat ''' docker-compose up -d '''
            }
        }
    }
}