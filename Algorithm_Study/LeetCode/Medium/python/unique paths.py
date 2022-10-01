class Solution(object):
    def uniquePaths(self, m, n):
        dp=[[0] *n for i in range(m)]

        for i in range(m):
            for j in range(n):
                if i==0:
                    dp[i][j]=1
                elif j==0:
                     dp[i][j]=1

                elif i>0 and j>0:
                    dp[i][j]=dp[i-1][j]+dp[i][j-1]

        return dp[m-1][n-1]
