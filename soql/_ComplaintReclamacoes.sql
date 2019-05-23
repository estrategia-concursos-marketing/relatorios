SELECT COUNT(co.SubscriberID) as Reclamacoes_Unicas,
       co.JobID
FROM SendsMCReport r
JOIN _Complaint co ON r.JobID = co.JobID
GROUP BY co.JobID