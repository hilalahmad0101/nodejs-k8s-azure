pipeline {
    agent any
    environment {
        IMAGE_NAME = "fffeeeeeee/nodejs-app:latest"
        KUBE_CONFIG = credentials('k8s-credentials') // Add K8s credentials in Jenkins
    }
    stages {
        stage('Clone Repo') {
            steps {
                git url:'https://github.com/hilalahmad0101/nodejs-k8s-azure.git',branch:'master'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t fffeeeeeee/nodejs-app:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                    sh 'docker push $IMAGE_NAME'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: 'k8s-credentials', variable: 'KUBECONFIG')]) {
                    sh 'kubectl apply -f k8s/deployment.yml'
                    sh 'kubectl apply -f k8s/service.yml'
                    sh 'kubectl get pods'
                }
            }
        }
    }
}
